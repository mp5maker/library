import * as React from 'react'

const actionList = {
    wrapper: {
        ref: "SET_WRAPPER_REF"
    },
    inputField: {
        ref: "SET_INPUT_FIELD_REF",
        onChange: "INPUT_FIELD_CHANGED",
        onClick: "INPUT_FIELD_CLICKED",
        onKeyDown: "KEY_DOWN_AT_INPUT_FIELD",
        onKey: {
            escape: "INPUT_FIELD_ON_KEY_ESCAPE"
        },
    },
    suggestion: {
        wrapper: {
            ref: "SET_SUGGESTION_WRAPPER_REF"
        },
        onUpdate: "SUGGESTION_UPDATED",
        item: {
            onClick: "SUGGESTION_ITEM_CLICKED"
        }
    }
}

const InputFieldWrapper = ({ dispatchAction, ...props }: any) => (
    <input
        type="text"
        autoComplete="off"
        ref={(el) => dispatchAction({
            type: actionList.inputField.ref,
            payload: { el }
        })}
        onClick={(event) => dispatchAction({
            type: actionList.inputField.onClick,
            event
        })}
        onKeyDown={(event) => dispatchAction({
            type: actionList.inputField.onKeyDown,
            event
        })}
        onChange={(event) => dispatchAction({
            type: actionList.inputField.onChange,
            event
        })}
        { ...props } />
)


const SuggestionItemWrapper = ({ children, ...props}: any) => (
    <li {...props}>
        { children }
    </li>
)

const DefaultItemComponent = ({ item }: any) => item.value

interface SuggestionWrapperPropsInterface {
    dispatchAction: (params: any) => any,
    items: any,
    keyPath: any,
    ItemComponent: any,
    visible: boolean
}

interface SuggestionWrapperStateInterface {}

class SuggestionWrapper extends React.Component<SuggestionWrapperPropsInterface, SuggestionWrapperStateInterface> {
    render() {
        const { dispatchAction, items, keyPath, ItemComponent, ...props } = this.props

        return (
            <div
                ref={(el) => dispatchAction({
                    type: actionList.suggestion.wrapper.ref,
                    payload: { el }
                })}
                className="suggestion-wrapper invisible">
                <ul>
                    {
                        items.map((item: any, index: number) => (
                            <SuggestionItemWrapper
                                key={item[keyPath]}
                                onClick={(event: any) => dispatchAction({
                                    type: actionList.suggestion.item.onClick,
                                    event,
                                    payload: { index }
                                })}
                                {...props}>
                                <ItemComponent item={item} />
                            </SuggestionItemWrapper>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

interface RawSelectFieldPropsInterface {
    className: any,
    children: any,
    suggestion: any,
    keyPath: any
    ItemComponent: any,
    onFocus: any,
    refresh: any,
    onSelect: any,
    selectedTemplate: (params: any) => any
}

interface RawSelectFieldStateInterface {
    selected: any,
    suggestionVisible: boolean,
    query: string,
    visible: boolean
}

class RawSelectField extends React.Component<RawSelectFieldPropsInterface, RawSelectFieldStateInterface> {
    private wrapperElement: any;
    private suggestionWrapperElement: any;
    private inputElement: any;
    private selectedItemIndex: any;
    private currentFocus: number

    constructor(props: RawSelectFieldPropsInterface) {
        super(props)
        this.state = {
            selected: null,
            suggestionVisible: false,
            query: '',
            visible: false
        }

        this.wrapperInputField = this.wrapperInputField.bind(this)
        this.wrapperSuggestion = this.wrapperSuggestion.bind(this)

        this.turnOffSuggestion = this.turnOffSuggestion.bind(this)
        this.turnOnSuggestion = this.turnOnSuggestion.bind(this)

        this.selectedItem = this.selectedItem.bind(this)
        this.focusAt = this.focusAt.bind(this)
        this.handleEnterKey = this.handleEnterKey.bind(this)
        this.handleEscapeKey = this.handleEscapeKey.bind(this)
        this.handleKeyDownOnInputField = this.handleKeyDownOnInputField.bind(this)

        this.focusAtSelectedItem = this.focusAtSelectedItem.bind(this)
        this.handleSuggestionChange = this.handleSuggestionChange.bind(this)
        this.handleClickSuggestion = this.handleClickSuggestion.bind(this)
        this.handleClickInputField = this.handleClickInputField.bind(this)
        this.dispatchAction = this.dispatchAction.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)

        this.wrapperElement = null;
        this.suggestionWrapperElement = null;
        this.inputElement = null;
        this.selectedItemIndex = null;
        this.currentFocus = 0;
    }

    wrapperInputField() {
        const { selected, suggestionVisible, query } = this.state
        const { selectedTemplate } = this.props
        const inputValue = selected && !suggestionVisible
            ? selectedTemplate(selected)
            : (suggestionVisible && query != '') ? query : '';

        return (
            <InputFieldWrapper
                dispatchAction={this.dispatchAction}
                value={inputValue}
                {...this.props} />
        )
    }

    wrapperSuggestion() {
        const { visible } = this.state
        const { suggestion, keyPath, ItemComponent } = this.props

        return (
            <SuggestionWrapper
                ItemComponent={ItemComponent}
                keyPath={keyPath}
                visible={visible}
                items={suggestion}
                dispatchAction={this.dispatchAction}
                {...this.props}
            />
        )
    }


    turnOffSuggestion() {
        const { suggestionVisible } = this.state
        if (suggestionVisible) {
            if (this.suggestionWrapperElement) {
                this.suggestionWrapperElement.classList.remove('visible')
                this.suggestionWrapperElement.classList.add('invisible')
            }
            this.setState({ suggestionVisible: false })
        }
    }

    turnOnSuggestion() {
        const { suggestionVisible } = this.state;
        if (suggestionVisible) {
            if (this.suggestionWrapperElement) {
                this.suggestionWrapperElement.classList.remove('invisible')
                this.suggestionWrapperElement.classList.add('visible')
            }
            this.setState({ suggestionVisible: true })
        }
    }

    selectedItem(action: any) {
        const { currentFocus } = this
        const { suggestion, onSelect } = this.props
        const selectedItemIndex = currentFocus + 1;
        const selectedItem = suggestion[selectedItemIndex]

        this.selectedItemIndex = selectedItemIndex
        if (onSelect) onSelect(selectedItem)
        this.turnOffSuggestion();
        this.setState({ selected: selectedItem })
    }

    focusAt(requestedFocus: any, action: any) {
        const { suggestion } = this.props;
        const { suggestionWrapperElement, currentFocus } = this
        let focusAt = requestedFocus;

        if (currentFocus == 0 && requestedFocus == 0) focusAt = 1;
        if (currentFocus == 1 && requestedFocus == 0) focusAt = suggestion.length;
        if (requestedFocus < 0) focusAt = (suggestion.length + 1) + requestedFocus;
        if (currentFocus == suggestion.length && requestedFocus == suggestion.length + 1) focusAt = 1

        if (suggestionWrapperElement) {
            suggestionWrapperElement.querySelector(`ul > li.hover`).forEach((node) => {
                node.classList.remove('hover')
            })
            let li = suggestionWrapperElement.querySelector(`ul > li:nth-child(${focusAt})`)
            if (li) {
                li.classList.add('hover')
                li.scrollIntoViewIfNeedded()
            }
            this.currentFocus = focusAt;
        }

    }


    handleEscapeKey(action: any) {
        this.turnOffSuggestion()
    }


    handleEnterKey(action: any) {
        const { suggestionVisible } = this
        if (suggestionVisible) this.selectedItem(action)
        if (!suggestionVisible) this.turnOnSuggestion()
    }

    handleKeyDownOnInputField(action) {
        switch(action.event.keyCode) {
            case 40:
                return this.focusAt(this.currentFocus + 1, action)
            case 38:
                return this.focusAt(this.currentFocus - 1, action)
            case 36:
                return this.focusAt(1, action)
            case 35:
                return this.focusAt(-1, action)
            case 13:
                return this.handleEnterKey(action)
            case 27:
                return this.handleEscapeKey(action)
            default: return;
        }
    }

    focusAtSelectedItem(action: any) {
        const { selectedItemIndex } = this
        const { selected } = this.state
        const { suggestion, keyPath }  = this.props

        if (suggestion.length == 0) return
        if (selected == null) return this.focusAt(1, action)

        const selectedItemId = selected[keyPath]
        const newSelectedItem = suggestion[selectedItemIndex]
        if (newSelectedItem) {
            const newSelectedItemId = newSelectedItem[keyPath]
            if (selectedItemId == newSelectedItemId) return this.focusAt(selectedItemIndex + 1, action)
        }

        if(action.type == actionList.suggestion.onUpdate) this.focusAt(1, action)
        if (action.type != actionList.inputField.onClick) return

        let suggestionSearchResult: any = { index: null, value: null }
        suggestionSearchResult.value = suggestion.find((eachSuggestion: any, suggestionIndex: number) => {
            const suggestionId = eachSuggestion[keyPath];
            if (selectedItemId == suggestionId) {
                suggestionSearchResult.index = suggestionIndex
                return eachSuggestion;
            }
        })
        if (suggestionSearchResult.index == null) return this.focusAt(1, action)

        const { currentFocus } = this
        const focusShouldBeAt = suggestionSearchResult.index + 1
        const isAlreadyFocused = currentFocus == focusShouldBeAt
        const isSelectedItemIndexCorrect = selectedItemIndex == suggestionSearchResult.index
        if(!isAlreadyFocused) this.focusAt(focusShouldBeAt, null)
        if (isSelectedItemIndexCorrect) this.selectedItemIndex = suggestionSearchResult.index;
    }

    handleSuggestionChange(action: any) {
        const { suggestion } = this.props
        const { prevProps } = action.payload
        if (suggestion != prevProps.suggestion) this.focusAtSelectedItem(action)
    }

    handleClickInputField(action: any) {
        const { currentFocus, selectedItemIndex } = this
        const { suggestionVisible, query } = this.state
        const { onFocus, refresh } = this.props

        if (!suggestionVisible) this.turnOnSuggestion()
        if (selectedItemIndex != null) this.focusAtSelectedItem(action)
        if (selectedItemIndex == null) this.focusAt(currentFocus, null)
        if (onFocus) onFocus()
        if (refresh) refresh(query)
    }

    handleClickSuggestion(action: any) {
        this.focusAt(action.payload.index + 1, action)
        this.selectedItemIndex(action)
        this.turnOffSuggestion()
    }

    dispatchAction(action: any) {
        switch (action.type) {
            case actionList.wrapper.ref:
                return this.wrapperElement = action.payload.el
            case actionList.inputField.ref:
                return this.inputElement = action.payload.el
            case actionList.suggestion.wrapper.ref:
                return this.suggestionWrapperElement = action.payload.el
            case actionList.inputField.onClick:
                return this.handleClickInputField(action)
            case actionList.inputField.onKeyDown:
                return this.handleClickInputField(action)
            case actionList.inputField.onChange:
                return this.handleClickSuggestion(action)
            case actionList.suggestion.item.onClick:
                return this.handleClickSuggestion(action);
            case actionList.suggestion.onUpdate:
                return this.handleSuggestionChange(action)
        }
    }

    handleClickOutside(event: any) {
        if (this.wrapperElement && !this.wrapperElement.contains(event.target)) this.turnOffSuggestion()
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    render() {
        const { className } = this.props

        return (
            <span
                ref={(el) => this.dispatchAction({
                    type: actionList.wrapper.ref,
                    payload: { el }
                })}
                className={className ? `select-group ${className}` : `select - group`}>
                {
                    this.props.children({
                        InputField: this.wrapperInputField,
                        Suggestion: this.wrapperSuggestion
                    })
                }
            </span>
        )
    }
}

export const BasicSelectField = ((ItemComponent: any, ...props: any) => {
    const suggestionProps = {...(ItemComponent ? { ItemComponent } : {} ) }

    return (
        <RawSelectField {...props}>
            {
                ({ InputField , Suggestion }: any) => (
                    <React.Fragment>
                        <div className="row">
                            <div className="col">
                                <div className="input-group">
                                    <InputField
                                        placeholder="Hint type v or f"
                                        className="form-control" />
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Suggestion {...suggestionProps} />
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </RawSelectField>
    )
})
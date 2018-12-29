window.onload = init;

function init() {
    // Simple Selector
    console.log(document.getElementById('page-banner'))
    console.log(document.getElementsByClassName('row'))
    console.log(document.getElementsByTagName('li'))

    // Cycle through li items [For Tag Name and ClassName because they return HTML Collection]
    var li = Array.from(document.getElementsByTagName('li'))
    li.forEach((element) => {
        element.classList.add('this-is-li')
    })

    // Query Selector
    var queryLi = document.querySelector('li')
    console.log(queryLi)

    // Complicated Selector
    var querySelect = document.querySelector('.row:last-child div ul li:nth-child(2)')
    console.log(querySelect) 


    // Query Selector All
    var queryLiList = document.querySelectorAll("li")
    console.log(queryLiList)

    // Text Content | Append (+=) Text | innerHTML | Append HTML (+=)
    var querySelector = document.querySelectorAll('.row:last-child div ul li')
    querySelector.forEach((element) => {
        // console.log(element.textContent)
        // element.textContent = "Boom"
        // element.textContent += "Boom"
        // element.innerHTML += "<p>Dayum</p>"
        console.log(element.textContent)
    })

    // Node | NodeType | NodeName | hasChildNodes
    var pageBanner = document.querySelector("#page-banner")
    console.log(pageBanner.nodeType) // 1 ==> Element
    console.log(pageBanner.nodeName) // DIV ==> Tag
    console.log(pageBanner.hasChildNodes()) // true ==> has Children
    
    // Clone (Get All the Contents)
    var clonedBanner = pageBanner.cloneNode(true)
    console.log(clonedBanner)

    // Parent Node | Parent Element (Similar)
    var buttonGroup = document.querySelector('.row:nth-child(3) .col .btn-group')
    console.log(buttonGroup.parentElement)
    console.log(buttonGroup.parentNode)

    // Child Nodes [Returns the line breaks as well] | Childrens
    console.log(buttonGroup.childNodes)
    console.log(buttonGroup.children)

    // Sibling to Sibling | first | last | previous | next
    var listGroup = document.querySelector('.row:last-child .col .list-group')
    console.log(listGroup.firstElementChild) // Element
    console.log(listGroup.nextSibling) // Node
    console.log(listGroup.firstElementChild.nextElementSibling) // Element
    console.log(listGroup.lastElementChild) // Element
    console.log(listGroup.lastElementChild.previousElementSibling) // Element

    // Events
    var listen = document.querySelector('.row:nth-child(3) .col .btn-group button')
    listen.addEventListener('click', (event) => {
        console.log(event)
    })

    // Remove Child
    var parent = document.querySelectorAll('.row:nth-child(3) .col .btn-group button')
    parent.forEach((element) => {
        element.addEventListener('click', function(event) {
            event.target.parentElement.removeChild(element)
        })
    })

    // Prevent Default
    var anchor = document.querySelectorAll('.anchor-tag-collection a')
    anchor.forEach((element) => {
        element.addEventListener('click', function(event) {
            event.preventDefault()
            console.log(event.target)
        })
    })

    // Event Bubbling
    var bubbling = document.querySelector('#event-bubbling')
    bubbling.addEventListener('click', function() {
        parent = event.target.closest('#event-bubbling')
        child = event.target.closest('button')
        parent.removeChild(child)
    })

    // Forms
    var userForm = document.forms['simple-form']
    userForm.addEventListener('submit', function(event) {
        event.preventDefault()
        // event.stopPropagation()
        console.log(event.target)
        const username = userForm.querySelector("[name='username']").value
        const password = userForm.querySelector("[name='password']").value
        console.log(username)
        console.log(password)
    })

    // Search
    var search = document.forms['search']
    search.addEventListener('submit', function(event) {
        event.stopPropagation()
        event.preventDefault()
        console.log(search.querySelector("[name='search']").value)
    })


    // Creating Elements
    var createElementForm = document.forms['create-element']
    createElementForm.addEventListener('submit', function(event) {
        event.preventDefault()
        const book = createElementForm.querySelector("[name='book']").value
        const ul = document.querySelector('.create-elements')
        const li = document.createElement('li')
        
        const textSpan = document.createElement('span')
        textSpan.innerHTML = book
        
        const cancelSpan = document.createElement('span')
        cancelSpan.innerHTML = "&times;"

        li.appendChild(textSpan)
        li.appendChild(cancelSpan)
        ul.appendChild(li)
    })

    var removeTheChildParent = document.querySelector('.create-elements')
    removeTheChildParent.addEventListener('click', function(event) {
        removeTheChildParent.removeChild(event.target.closest('li'))
    })

    // Styles and Classes
    var stylingElement = document.querySelector('.styling-elements ul.list-group')
    stylingElement.firstElementChild.classList.add('text-danger')
    // stylingElement.firstElementChild.classList.remove('text-danger')
    // stylingElement.firstElementChild.nextElementSibling.style.display = 'none'

    // Change Attributes


    // Attributes
    var attributes = document.querySelector('.row:last-child .col .list-group')
    console.log(attributes.getAttribute('class'))
    attributes.setAttribute('boom', 'shakalaka')
    console.log(attributes)
    attributes.removeAttribute('boom')
    // attributes.hasAttribute('class')

    // Checkbox Events
    const toggle = document.getElementById('toggle')
    toggle.addEventListener('change', function(event) {
        if (toggle.checked) {
            document.getElementById("show-me").style.display = "block"
        } else {
            document.getElementById("show-me").style.display = "none"
        }
    })

    // Dom Content Loaded
    // document.addEventListener('DOMContentLoaded', function() {

    // })
}
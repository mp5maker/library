import * as React from 'react'

import './Footer.scss'

export interface footerProps {}

export const Footer: React.SFC<footerProps> = () => (
    <footer>
        <div>
            &copy; 2019 All Rights Reserved, Photon Enterprise
        </div>
    </footer>
)
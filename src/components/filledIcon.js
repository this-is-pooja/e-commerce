import React from 'react'
import { Icon } from "@chakra-ui/react";

export default function filledIcon(props) {
    return (
        <>

            <Icon viewBox="0 0 69 75" {...props}>
                <path
                    fill="currentColor"
                    d="M56.925 54.25H12.075C11.1263 54.25 10.35 55.1219 10.35 56.1875V60.0625C10.35 61.1281 11.1263 62 12.075 62H56.925C57.8738 62 58.65 61.1281 58.65 60.0625V56.1875C58.65 55.1219 57.8738 54.25 56.925 54.25ZM63.825 15.5C60.968 15.5 58.65 18.1035 58.65 21.3125C58.65 22.1723 58.8225 22.9715 59.1244 23.7102L51.3188 28.9656C49.6584 30.0797 47.513 29.45 46.5534 27.5609L37.7667 10.293C38.9203 9.22734 39.675 7.62891 39.675 5.8125C39.675 2.60352 37.357 0 34.5 0C31.643 0 29.325 2.60352 29.325 5.8125C29.325 7.62891 30.0797 9.22734 31.2333 10.293L22.4466 27.5609C21.487 29.45 19.3308 30.0797 17.6812 28.9656L9.88641 23.7102C10.1775 22.9836 10.3608 22.1723 10.3608 21.3125C10.3608 18.1035 8.04281 15.5 5.18578 15.5C2.32875 15.5 0 18.1035 0 21.3125C0 24.5215 2.31797 27.125 5.175 27.125C5.45531 27.125 5.73563 27.0766 6.00516 27.0281L13.8 50.375H55.2L62.9948 27.0281C63.2644 27.0766 63.5447 27.125 63.825 27.125C66.682 27.125 69 24.5215 69 21.3125C69 18.1035 66.682 15.5 63.825 15.5Z"
                />
            </Icon>

        </>
    )
}


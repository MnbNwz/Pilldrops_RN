import React from 'react'
import { SvgXml } from 'react-native-svg'

const ExclamationIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <g clip-path="url(#clip0_777_460)">
          <rect width="15.1615" height="15" transform="translate(0.48584)" fill="black"/>
          <path d="M8.06661 0C12.2535 0 15.6474 3.35775 15.6474 7.5C15.6474 11.6423 12.2535 15 8.06661 15C3.87975 15 0.48584 11.6423 0.48584 7.5C0.48584 3.35775 3.87975 0 8.06661 0ZM7.95668 5.4075C7.81648 5.4075 7.68201 5.46255 7.5828 5.56056C7.48358 5.65858 7.42775 5.79154 7.42755 5.93025V11.5988C7.43273 11.7341 7.4907 11.8621 7.5893 11.956C7.68789 12.05 7.81944 12.1024 7.95631 12.1024C8.09317 12.1024 8.22472 12.05 8.32331 11.956C8.42191 11.8621 8.47988 11.7341 8.48506 11.5988V5.93025C8.48506 5.79154 8.42942 5.6585 8.33035 5.56034C8.23128 5.46219 8.09689 5.4077 7.95668 5.4075ZM7.97791 3.31425C7.79093 3.31425 7.61161 3.38774 7.47939 3.51854C7.34718 3.64935 7.2729 3.82676 7.2729 4.01175C7.2729 4.19674 7.34718 4.37415 7.47939 4.50496C7.61161 4.63576 7.79093 4.70925 7.97791 4.70925C8.16489 4.70925 8.34421 4.63576 8.47643 4.50496C8.60864 4.37415 8.68292 4.19674 8.68292 4.01175C8.68292 3.82676 8.60864 3.64935 8.47643 3.51854C8.34421 3.38774 8.16489 3.31425 7.97791 3.31425Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_777_460">
            <rect width="15.1615" height="15" fill="white" transform="translate(0.48584)"/>
          </clipPath>
        </defs>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default ExclamationIcon
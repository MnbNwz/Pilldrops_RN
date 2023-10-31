import React from 'react'
import { SvgXml } from 'react-native-svg'

const PlusIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.63877 0.249708C6.72562 -0.0832361 9.84083 -0.0832361 12.9277 0.249708C14.6368 0.436114 16.0157 1.74581 16.2162 3.41472C16.5823 6.46094 16.5823 9.53829 16.2162 12.5845C16.1147 13.3955 15.7347 14.1493 15.1378 14.7237C14.5409 15.2982 13.7621 15.6597 12.9277 15.7495C9.84089 16.0835 6.72556 16.0835 3.63877 15.7495C2.80432 15.6597 2.02551 15.2982 1.42861 14.7237C0.831713 14.1493 0.451719 13.3955 0.350238 12.5845C-0.0158344 9.53861 -0.0158344 6.46158 0.350238 3.41569C0.451675 2.60489 0.831524 1.85119 1.42822 1.27673C2.02492 0.702269 2.8035 0.340721 3.63777 0.250679L3.63877 0.249708ZM8.28323 3.15259C8.48169 3.15259 8.67202 3.2293 8.81236 3.36585C8.95269 3.50241 9.03153 3.68761 9.03153 3.88073V7.27195H12.5166C12.7151 7.27195 12.9054 7.34867 13.0457 7.48522C13.1861 7.62177 13.2649 7.80698 13.2649 8.0001C13.2649 8.19321 13.1861 8.37842 13.0457 8.51497C12.9054 8.65153 12.7151 8.72824 12.5166 8.72824H9.03153V12.1195C9.03153 12.3126 8.95269 12.4978 8.81236 12.6343C8.67202 12.7709 8.48169 12.8476 8.28323 12.8476C8.08477 12.8476 7.89443 12.7709 7.7541 12.6343C7.61377 12.4978 7.53493 12.3126 7.53493 12.1195V8.72824H4.04984C3.85138 8.72824 3.66104 8.65153 3.52071 8.51497C3.38038 8.37842 3.30154 8.19321 3.30154 8.0001C3.30154 7.80698 3.38038 7.62177 3.52071 7.48522C3.66104 7.34867 3.85138 7.27195 4.04984 7.27195H7.53493V3.88073C7.53493 3.68761 7.61377 3.50241 7.7541 3.36585C7.89443 3.2293 8.08477 3.15259 8.28323 3.15259Z" fill="white"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default PlusIcon
# React SVG Map India

This package generates an interactive SVG map of India. It allows users to highlight states on hover and retrieve the value of the selected state. The map includes all 28 states and 8 union territories of India.

![India Map](./svgmap.gif)

## Features

- Interactive hover effects on states
- Click handling with state code callbacks
- Fully customizable colors and styling
- Keyboard accessible (Tab navigation + Enter to select)
- TypeScript support with full type definitions
- Supports React 16, 17, 18, and 19
- Lightweight with no external dependencies

## Installation

Install the package via npm:

```bash
npm install react-svgmap-india
```

Or with yarn:

```bash
yarn add react-svgmap-india
```

## State List

The following are the states and UTs mapped with their ID codes:

```js
const states = {
  'AN': 'Andaman and Nicobar Islands',
  'AP': 'Andhra Pradesh',
  'AR': 'Arunachal Pradesh',
  'AS': 'Assam',
  'BR': 'Bihar',
  'CH': 'Chandigarh',
  'CT': 'Chhattisgarh',
  'DD': 'Dadra and Nagar Haveli',
  'DL': 'Delhi',
  'DN': 'Daman and Diu',
  'GA': 'Goa',
  'GJ': 'Gujarat',
  'HP': 'Himachal Pradesh',
  'HR': 'Haryana',
  'JH': 'Jharkhand',
  'JK': 'Jammu and Kashmir',
  'KA': 'Karnataka',
  'KL': 'Kerala',
  'LA': 'Ladakh',
  'LD': 'Lakshadweep',
  'MH': 'Maharashtra',
  'ML': 'Meghalaya',
  'MN': 'Manipur',
  'MP': 'Madhya Pradesh',
  'MZ': 'Mizoram',
  'NL': 'Nagaland',
  'OR': 'Odisha',
  'PB': 'Punjab',
  'PY': 'Puducherry',
  'RJ': 'Rajasthan',
  'SK': 'Sikkim',
  'TG': 'Telangana',
  'TN': 'Tamil Nadu',
  'TR': 'Tripura',
  'UP': 'Uttar Pradesh',
  'UT': 'Uttarakhand',
  'WB': 'West Bengal'
}
```

## Usage

### Basic Usage

```jsx
'use client'

import { useState } from 'react'
import IndiaMap from 'react-svgmap-india'

export default function MapComponent() {
  const [state, setState] = useState('')

  return (
    <>
      <div>{state}</div>
      <IndiaMap
        onClick={(stateCode) => setState(stateCode)}
        size="500px"
        mapColor="white"
        strokeColor="#4f4f4f"
        strokeWidth="1"
        hoverColor="#48d8f5"
      />
    </>
  )
}
```

### With TypeScript

```tsx
import { useState } from 'react'
import IndiaMap from 'react-svgmap-india'

export default function MapComponent() {
  const [selectedState, setSelectedState] = useState<string>('')

  const handleStateClick = (stateCode: string) => {
    setSelectedState(stateCode)
    // Navigate or perform actions based on state code
  }

  return (
    <IndiaMap
      onClick={handleStateClick}
      size="100%"
      mapColor="#f5f5f5"
      strokeColor="#333333"
      strokeWidth="0.5"
      hoverColor="#ff9933"
      className="india-map-container"
    />
  )
}
```

## Props Available

| Prop        | Type                        | Required | Default     | Description                                    |
|-------------|-----------------------------|----------|-------------|------------------------------------------------|
| onClick     | `(stateCode: string) => void` | Yes      | -           | Callback when a state is clicked               |
| className   | `string`                    | No       | `"svgmap"`  | Custom CSS class for the map container         |
| size        | `string`                    | No       | `"inherit"` | Width of the map (e.g., "500px", "100%")       |
| mapColor    | `string`                    | No       | `"#ffffff"` | Default fill color for states                  |
| strokeColor | `string`                    | No       | `"#000000"` | Border color for each state                    |
| strokeWidth | `string`                    | No       | `"0.5"`     | Border width for each state                    |
| hoverColor  | `string`                    | No       | `"#303030"` | Fill color when hovering over a state          |

## Accessibility

The map component includes built-in accessibility features:
- Each state is keyboard focusable using Tab
- States can be activated using Enter or Space
- ARIA labels are provided for screen readers
- Focus states mirror hover states for visual consistency

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

ISC

## Credits

Reference of SVG map taken from [MAPSVG](https://mapsvg.com/maps/india).

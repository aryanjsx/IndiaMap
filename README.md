<div align="center">

# 🇮🇳 @aryanjsx/indiamap

**An elegant, interactive SVG map of India for React applications**

[![npm version](https://img.shields.io/npm/v/@aryanjsx/indiamap.svg?style=flat-square&color=ff9933)](https://www.npmjs.com/package/@aryanjsx/indiamap)
[![npm downloads](https://img.shields.io/npm/dm/@aryanjsx/indiamap.svg?style=flat-square&color=138808)](https://www.npmjs.com/package/@aryanjsx/indiamap)
[![license](https://img.shields.io/npm/l/@aryanjsx/indiamap.svg?style=flat-square&color=000080)](https://github.com/aryanjsx/IndiaMap/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-16%20%7C%2017%20%7C%2018%20%7C%2019-61dafb?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)

<br />

![India Map Demo](./svgmap.gif)

<br />

[Installation](#-installation) • [Usage](#-usage) • [Props](#-props) • [State Codes](#-state-codes) • [Examples](#-examples) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- 🗺️ **Complete Coverage** — All 28 states and 8 union territories of India
- 🎨 **Fully Customizable** — Colors, sizes, and styles to match your design
- 🖱️ **Interactive** — Smooth hover effects and click handling
- ⌨️ **Accessible** — Full keyboard navigation and ARIA support
- 📦 **Lightweight** — Zero external dependencies
- 🔷 **TypeScript** — Complete type definitions included
- ⚡ **Performant** — Optimized with React hooks and memoization

---

## 📦 Installation

```bash
# npm
npm install @aryanjsx/indiamap

# yarn
yarn add @aryanjsx/indiamap

# pnpm
pnpm add @aryanjsx/indiamap
```

---

## 🚀 Usage

### Basic Example

```jsx
import { useState } from 'react'
import IndiaMap from '@aryanjsx/indiamap'

function App() {
  const [selectedState, setSelectedState] = useState('')

  return (
    <div>
      <h2>Selected: {selectedState || 'Click a state'}</h2>
      <IndiaMap
        onClick={(stateCode) => setSelectedState(stateCode)}
        size="500px"
        mapColor="#ffffff"
        strokeColor="#4a4a4a"
        strokeWidth="0.5"
        hoverColor="#ff9933"
      />
    </div>
  )
}
```

### Next.js / App Router

```jsx
'use client'

import { useState } from 'react'
import IndiaMap from '@aryanjsx/indiamap'

export default function MapPage() {
  const [state, setState] = useState('')

  return (
    <IndiaMap
      onClick={setState}
      size="100%"
      mapColor="#f8fafc"
      strokeColor="#334155"
      hoverColor="#0ea5e9"
    />
  )
}
```

### With TypeScript

```tsx
import { useState } from 'react'
import IndiaMap from '@aryanjsx/indiamap'

const MapComponent: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('')

  const handleStateClick = (stateCode: string): void => {
    setSelectedState(stateCode)
    console.log(`Selected: ${stateCode}`)
  }

  return (
    <IndiaMap
      onClick={handleStateClick}
      size="600px"
      mapColor="#1e293b"
      strokeColor="#475569"
      strokeWidth="0.5"
      hoverColor="#22c55e"
      className="india-map"
    />
  )
}

export default MapComponent
```

---

## 📋 Props

| Prop | Type | Required | Default | Description |
|:-----|:-----|:--------:|:--------|:------------|
| `onClick` | `(stateCode: string) => void` | ✅ | — | Callback fired when a state is clicked |
| `className` | `string` | ❌ | `"svgmap"` | CSS class for the container |
| `size` | `string` | ❌ | `"inherit"` | Width of the map (e.g., `"500px"`, `"100%"`) |
| `mapColor` | `string` | ❌ | `"#ffffff"` | Default fill color for states |
| `strokeColor` | `string` | ❌ | `"#000000"` | Border color for states |
| `strokeWidth` | `string` | ❌ | `"0.5"` | Border width for states |
| `hoverColor` | `string` | ❌ | `"#303030"` | Fill color on hover/focus |

---

## 🗺️ State Codes

The map uses ISO-style 2-letter codes for each state and union territory:

<details>
<summary><strong>📍 States (28)</strong></summary>

| Code | State |
|:----:|:------|
| `AP` | Andhra Pradesh |
| `AR` | Arunachal Pradesh |
| `AS` | Assam |
| `BR` | Bihar |
| `CT` | Chhattisgarh |
| `GA` | Goa |
| `GJ` | Gujarat |
| `HR` | Haryana |
| `HP` | Himachal Pradesh |
| `JH` | Jharkhand |
| `KA` | Karnataka |
| `KL` | Kerala |
| `MP` | Madhya Pradesh |
| `MH` | Maharashtra |
| `MN` | Manipur |
| `ML` | Meghalaya |
| `MZ` | Mizoram |
| `NL` | Nagaland |
| `OR` | Odisha |
| `PB` | Punjab |
| `RJ` | Rajasthan |
| `SK` | Sikkim |
| `TN` | Tamil Nadu |
| `TG` | Telangana |
| `TR` | Tripura |
| `UP` | Uttar Pradesh |
| `UT` | Uttarakhand |
| `WB` | West Bengal |

</details>

<details>
<summary><strong>🏛️ Union Territories (8)</strong></summary>

| Code | Union Territory |
|:----:|:----------------|
| `AN` | Andaman and Nicobar Islands |
| `CH` | Chandigarh |
| `DD` | Dadra and Nagar Haveli and Daman and Diu |
| `DL` | Delhi |
| `JK` | Jammu and Kashmir |
| `LA` | Ladakh |
| `LD` | Lakshadweep |
| `PY` | Puducherry |

</details>

### Quick Reference

```javascript
const stateNames = {
  'AN': 'Andaman and Nicobar Islands',
  'AP': 'Andhra Pradesh',
  'AR': 'Arunachal Pradesh',
  'AS': 'Assam',
  'BR': 'Bihar',
  'CH': 'Chandigarh',
  'CT': 'Chhattisgarh',
  'DD': 'Dadra and Nagar Haveli and Daman and Diu',
  'DL': 'Delhi',
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

---

## 🎨 Examples

### Dark Theme

```jsx
<IndiaMap
  onClick={handleClick}
  size="100%"
  mapColor="#1a1a2e"
  strokeColor="#4a4a6a"
  strokeWidth="0.5"
  hoverColor="#e94560"
/>
```

### Tricolor Theme (Indian Flag Colors)

```jsx
<IndiaMap
  onClick={handleClick}
  size="500px"
  mapColor="#ffffff"
  strokeColor="#138808"
  strokeWidth="1"
  hoverColor="#ff9933"
/>
```

### Minimal Light

```jsx
<IndiaMap
  onClick={handleClick}
  size="100%"
  mapColor="#f1f5f9"
  strokeColor="#cbd5e1"
  strokeWidth="0.25"
  hoverColor="#3b82f6"
/>
```

### Navigation Example

```jsx
import { useNavigate } from 'react-router-dom'
import IndiaMap from '@aryanjsx/indiamap'

function ExploreMap() {
  const navigate = useNavigate()

  const handleStateClick = (stateCode) => {
    navigate(`/state/${stateCode.toLowerCase()}`)
  }

  return (
    <IndiaMap
      onClick={handleStateClick}
      size="100%"
      mapColor="#ecfdf5"
      strokeColor="#059669"
      hoverColor="#10b981"
    />
  )
}
```

---

## ♿ Accessibility

This component is built with accessibility in mind:

- **Keyboard Navigation** — Tab through states, press Enter or Space to select
- **ARIA Labels** — Screen reader support with descriptive labels
- **Focus Indicators** — Visual focus states that mirror hover styles
- **Semantic SVG** — Proper `role` and `aria-label` attributes

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

[ISC](./LICENSE) © [Aryan](https://github.com/aryanjsx)

---

## 🙏 Credits

- SVG map reference from [MAPSVG](https://mapsvg.com/maps/india)

---

<div align="center">

**[⬆ Back to Top](#-aryanjsxindiamap)**

Made with ❤️ in India

</div>

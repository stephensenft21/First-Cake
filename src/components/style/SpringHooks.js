import React from 'react'
import {Transition, show} from 'react-spring/renderprops'
// import { config } from 'react-spring'

class App extends React.Component {
render() {
    return (
<Transition
items={show}
from={{ opacity: 0 }}
enter={{ opacity: 1 }}
leave={{ opacity: 0 }}>
{show => show && (props => <div style={props}>heyyyy</div>)}
</Transition>
    ) } }
     export default App      
import { ScrollView, Text, View } from 'react-native'
import DoneListCell from './DoneListCell'

const DoneList = ({dones, onRemove}) => {
    return (
        <ScrollView>
            {dones.map(done => (
                <DoneListCell
                    key = {done.id}
                    textValue = {done['done']}
                    id = {done.id}
                    onRemove = {onRemove}
                />
            ))}
        </ScrollView>
    )
}

export default DoneList 
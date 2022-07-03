import SideContent from '../SideContent';
import BtnCreateGroup from '../../../../../pages/BtnCreateGroup'

const listContents = [
    {
        id: 'partner-list',
        title: 'Bạn đồng hành',
        type: 'user'
    },
    {
        id: 'group-location-list',
        title: 'Nhóm địa điểm',
        type: 'group'
    }
]

function Left() {

    return (
        <>
            <BtnCreateGroup />
            <SideContent
                openStatus={true}
                listContents={listContents}
            />
        </>
    );
}

export default Left;
import SideContent from '../SideContent';

const listContents = [
    {
        id: 'location-list',
        title: 'Địa điểm',
        type: 'location'
    },
    {
        id: 'friend-list',
        title: 'Bạn bè',
        type: 'user',
    },
    {
        id: 'group-list',
        title: 'Nhóm',
        type: 'group'
    }
]

function Right() {

    return (
        <SideContent 
            openStatus={false}
            listContents={listContents}
        />
    );
}

export default Right;
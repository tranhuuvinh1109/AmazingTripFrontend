import SideContent from '../SideContent';


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
        <SideContent 
            openStatus={true}
            listContents={listContents}
        />
    );
}

export default Left;
import ICON_SRC_MAPPING from '../../constants/iconSrcMapping'

const Chat = () => {
  return (
    <button className='fixed right-2 bottom-2 cursor-pointer'>
      <img
        src={ICON_SRC_MAPPING['chatIcon']}
        alt=''
        className='w-[6rem] h-[6rem]'
      />
    </button>
  )
}

export default Chat

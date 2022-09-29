// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageList, onStatusChanged, activeId} = props

  const {thumbnailUrl, thumbnailAltText, id} = eachImageList

  const isActive = id === activeId

  const classname = isActive ? 'button-class' : 'opacity-class'

  const onClickedItem = () => {
    console.log(id)
    onStatusChanged(id)
  }

  return (
    <li className="li-container">
      <button className={classname} type="button" onClick={onClickedItem}>
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem

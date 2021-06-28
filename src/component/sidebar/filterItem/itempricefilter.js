export default function ItemPriceFilter(props) {
  let datas = "";
  if (props.item.min && props.item.max) {
    datas = (
      <li
        className="itemfilterprice"
        onClick={() => {
          props.setMinmax(props.item.min, props.item.max);
        }}
      >
        ${props.item.min}-{props.item.max}
      </li>
    );
  } else if (props.item.min && !props.item.max) {
    datas = (
      <li
        className="itemfilterprice"
        onClick={() => {
          props.setMinmax(props.item.min);
        }}
      >
        &ge; ${props.item.min}
      </li>
    );
  } else if (!props.item.min && props.item.max) {
    datas = (
      <li
        className="itemfilterprice"
        onClick={() => {
          props.setMinmax(props.item.max);
        }}
      >
        &le; ${props.item.max}
      </li>
    );
  }
  return <div>{datas}</div>;
}

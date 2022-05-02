export default function Demo1(props) {
  //   子组件不能修改父组件
  const buy = () => {
    // props.money = props.money - 20
    props.user.name = 'man'
    props.user.age = 20
  }
  return (
    <div>
      <h3>Demo Component</h3>
      <div>Money: {props.money}</div>
      <div>
        {props.user.name} - {props.user.age}
      </div>
      <button onClick={buy}>buy</button>
    </div>
  )
}

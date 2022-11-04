// 해당 코드는 특정 코드의 일부를 잘라낸 코드 입니다.
// 코드의 전말을 알기 어렵지만,
// 이것이 무엇을 의미하는지 '추론'하는 과정에서 컴퓨팅 사고능력을 기를 수 있습니다.
// 해석이 안되어도 괜찮습니다. 계속 노출 하면서, 적응해 봅시다.

// 이전코드 ~~
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      valid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
  }
  handlePostChange(event) {
    const content = event.target.value;
    this.setState(() => {
      return {
        content,
        valid: content.length <= 280
      };
    });
  }
  handleSubmit() {
    if(!this.state.valid) {
      return;
    }
    const newPost = {
      content: this.state.content
    }
  }
  render() {
    return (
      <div className="create-post">
        <button onClick = {this.handleSubmit}>Post</button>
        <textarea
          value = {this.state.content}
          onChange = {this.handlePostChange}
          placeholder = "type sentence plase"
        />
      </div>
    )
  }
}
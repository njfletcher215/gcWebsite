import '../../styles/AllWork.css';
import List from '../List';

export default function AllWork() {
    return (
      <div className="all-work">
        <List listName="list 1">
          <p>item 1</p>
          <List listName="list 2">
            <p>nested item 1</p>
            <p>nested item 2</p>
          </List>
          <p>item 2</p>
        </List>
      </div>
    );
  }
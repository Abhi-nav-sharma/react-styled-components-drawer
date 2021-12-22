import Drawer from "./Components/Drawer";
import DrawerItem from "./Components/DrawerItem";
import "./styles.css";

export default function App() {
  return (
    <Drawer>
      <DrawerItem
        label="Inbox"
        icon="https://www.pngrepo.com/download/55149/inbox.png"
      />
      <DrawerItem
        label="Starred"
        icon="https://www.pinclipart.com/picdir/middle/394-3949390_computer-icons-clip-art-star-png-icon-transparent.png"
      />
      <DrawerItem
        label="Send email"
        icon="https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/email-mail-sent.png"
      />
      <DrawerItem
        label="Drafts"
        icon="https://icon-library.com/images/draft-icon/draft-icon-21.jpg"
      />
    </Drawer>
  );
}

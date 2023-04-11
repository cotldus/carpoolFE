import "../../styles/globals.css";
import { GlobalToggles } from "@/components/GlobalToggles";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import LoginDialog from "./LoginDialog";
import Registration from "@/components/Registration";

function Login() {
  const [openCreateUser, setOpenCreateUser] = useState<boolean>(false);
  return (
    <>
      <GlobalToggles />
      <LoginDialog setOpenCreateUser={setOpenCreateUser}/>
      <Dialog
        open={openCreateUser}
        onClose={() => setOpenCreateUser(false)}
      >
        <div className="dialog-bkg">
          <DialogTitle
            sx={{ padding: 1, justifyContent: "right", display: "flex" }}
            className=""
          >
            <Button
              className="right"
              sx={{ padding: 0, margin: 0, minWidth: "24px" }}
              onClick={() => setOpenCreateUser(false)}
            >
              <Close color="info"/>
            </Button>
          </DialogTitle>
          <DialogContent sx={{ padding: 0 }} className="">
            <div className="flex justify-center">
              <Registration setOpenCreateUser={setOpenCreateUser}/>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
export default Login;

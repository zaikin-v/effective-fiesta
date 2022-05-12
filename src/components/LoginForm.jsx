import {Modal, ModalBody, ModalDialog, ModalHeader, ModalTitle} from "react-bootstrap";
import ModalContext from "react-bootstrap/ModalContext";

function LoginForm () {
    return (
        <Modal show="true">
            <ModalDialog>
                <ModalContext>
                    <ModalHeader
                        className="text-center"
                    >
                        <ModalTitle>
                            <h4>
                                Sign in
                            </h4>
                        </ModalTitle>

                    </ModalHeader>
                    <ModalBody>
                        <div> Some text</div>
                    </ModalBody>
                </ModalContext>
            </ModalDialog>
        </Modal>
    )
}

export default LoginForm
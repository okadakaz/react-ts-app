import React, { memo, ReactNode, VFC } from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";


type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            autoFocus={false}
            motionPreset="slideInBottom"
        >
            <ModalOverlay>
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spcing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value="John" isReadOnly />
                                <FormLabel>フルネーム</FormLabel>
                                <Input value="John Subaru" isReadOnly />
                                <FormLabel>MAIL</FormLabel>
                                <Input value="123@test.com" isReadOnly />
                                <FormLabel>TEL</FormLabel>
                                <Input value="090-9999-9999" isReadOnly />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
});
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Theme, Button, Popover, Text, AlertDialog, Flex} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
    	accentColor="orange"
      grayColor="slate"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
      appearance="dark"
    >
        <Popover.Root>
        <Popover.Trigger>
          <Button variant="soft">Size 1</Button>
        </Popover.Trigger>
        <Popover.Content size="1" >
          <Text as="p" trim="both" size="1">
            The quick brown fox jumps over the lazy dog.
            <Popover.Close>
            <Button size="1">Close</Button>
          </Popover.Close>
          </Text>
        </Popover.Content>
      </Popover.Root>
      <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Revoke access</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Revoke access</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This application will no longer be accessible and any
          existing sessions will be expired.
        </AlertDialog.Description>
    
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Revoke access
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
    </Theme>
  </StrictMode>,
)

# slack-blockify-types

Type support to compose Slack Block Kit Messages.

## Description

`slack-blockify-types` offers strong type support to compose Slack Block Kit messages
and modals.

## Usage

The concrete type `Message` helps you compose a block kit message.

```typescript
import { Message } from "slack-blockify-types";

const slackBlockKitMessage: Message = {
    blocks: [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "Get to know about this package :wink:",
            },
        },
        {
            type: "section",
            fields: [
                {
                    type: "mrkdwn",
                    text: "Package: Slack Block Kit Types",
                },
                {
                    type: "plain_text",
                    text: " ",
                },
                {
                    type: "plain_text",
                    text: "Author: Amit Madgula",
                },
                {
                    type: "plain_text",
                    text: "",
                },
            ],
        },
        {
            type: "divider",
        },
        {
            type: "context",
            elements: [
                {
                    type: "plain_text",
                    text: "Author: Amit Madgula",
                },
            ],
        },
    ],
};
```

The concrete type `Modal` helps you compose a Modal or View Message
to open a dialog (Modal or View) in the Slack.

```typescript
import { Modal } from "slack-blockify-types";

const slackBlockKitModal: Modal = {
    // compose your Slack Block Kit Modal or View ...
};
```

## Atomic types

The atomic types of slack like `Section`, `Image`, `Divider` etc...
define the models of the respective constructs.

```typescript
import {
    Block,
    Section,
    Image,
    Divider,
    Context,
    // ...
} from "slack-blockify-types";
```

## Disclaimer

Missing one or more fields in one of the blocks, might throw errors
or highlight `type` field with red squigglies. Don't worry.

Just check each of the blocks carefully to find your answer :wink:

## Authors

-   Amit Madgula (amitsharmamad@gmail.com)

/**
 * Documentation Reference
 * https://api.slack.com/reference/block-kit/blocks
 */

import {
    ButtonElement,
    SelectMenus,
    OverflowElement,
    DatepickerElement,
    ImageElement,
    PlainTextInput,
    MultiSelectMenus,
    Elements,
} from "./block-elements";

import { Text, WithMrkdwn, Plain } from "./composition-objects";

export interface Block {
    block_id?: string;
}

export interface Actions extends Block {
    type: "actions";
    elements: (
        | ButtonElement
        | SelectMenus
        | OverflowElement
        | DatepickerElement
    )[];
}

export interface Context extends Block {
    type: "context";
    elements: (ImageElement | Text<WithMrkdwn>)[];
}

export interface Divider extends Block {
    type: "divider";
}

export interface File extends Block {
    type: "file";
    external_id: string;
    source: "remote";
}

export interface Image extends Block {
    type: "image";
    image_url: string;
    alt_text: string;
    title: Text<Plain>;
}

export interface Input extends Block {
    type: "input";
    label: Text<Plain>;
    element:
        | PlainTextInput
        | SelectMenus
        | MultiSelectMenus
        | DatepickerElement;
    hint?: Text<Plain>;
    optional?: boolean;
}

export interface Section extends Block {
    type: "section";
    text?: Text<WithMrkdwn>;
    fields?: Text<WithMrkdwn>[];
    accessory?: Elements;
}

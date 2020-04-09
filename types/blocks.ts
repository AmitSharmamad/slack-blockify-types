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

interface BlockProps {
    block_id?: string;
}

export interface Actions extends BlockProps {
    type: "actions";
    elements: (
        | ButtonElement
        | SelectMenus
        | OverflowElement
        | DatepickerElement
    )[];
}

export interface Context extends BlockProps {
    type: "context";
    elements: (ImageElement | Text<WithMrkdwn>)[];
}

export interface Divider extends BlockProps {
    type: "divider";
}

export interface File extends BlockProps {
    type: "file";
    external_id: string;
    source: "remote";
}

export interface Image extends BlockProps {
    type: "image";
    image_url: string;
    alt_text: string;
    title: Text<Plain>;
}

export interface Input extends BlockProps {
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

export interface Section extends BlockProps {
    type: "section";
    text?: Text<WithMrkdwn>;
    fields?: Text<WithMrkdwn>[];
    accessory?: Elements;
}

export type Block =
    | Actions
    | Context
    | Divider
    | File
    | Image
    | Input
    | Section;

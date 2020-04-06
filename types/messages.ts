/**
 * Documentation Reference
 * https://api.slack.com/reference/block-kit/blocks
 */

import { Actions, Context, Divider, File, Image, Section } from "./blocks";
import {
    ButtonElement,
    SelectMenus,
    MultiSelectMenus,
    OverflowElement,
    DatepickerElement
} from "./block-elements";
import { Text, Plain } from "./composition-objects";

export interface Message {
    blocks: (Actions | Context | Divider | File | Image | Section)[];
}

export type MessageActions = (
    | ButtonElement
    | ((SelectMenus | MultiSelectMenus | OverflowElement) & {
          selected_option: {
              text: Text<Plain>;
          };
      })
    | DatepickerElement
) & {
    block_id: string;
} & any;

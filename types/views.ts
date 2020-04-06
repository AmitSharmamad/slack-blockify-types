/**
 * Documentation Reference
 * https://api.slack.com/reference/surfaces/views
 */

import { Actions, Context, Divider, Input, Section, Image } from "./blocks";
import { Text, Plain } from "./composition-objects";

export interface Modal {
    type: "modal";
    title: Text<Plain>;
    blocks: (Actions | Context | Divider | Image | Input | Section)[];
    close: Text<Plain>;
    submit: Text<Plain>;
    private_metadata?: string;
    callback_id?: string;
    clear_on_close?: boolean;
    notify_on_close?: boolean;
    external_id?: string;
}

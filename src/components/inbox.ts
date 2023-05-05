import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherInboxElement } from '@aracna/icons-feather-web/elements/inbox-element.js'

export const IconFeatherInbox: ElementComponent<IconFeatherInboxElement, IconProps> = createBaseElementComponent<
  IconFeatherInboxElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-inbox', IconFeatherInboxElement)

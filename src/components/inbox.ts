import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherInboxElement } from '@aracna/icons-feather-web/elements/inbox-element'

export const IconFeatherInbox: ElementComponent<IconFeatherInboxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInboxElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-inbox', IconFeatherInboxElement)

import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherInboxElement } from '@aracna/icons-feather-web/elements/inbox-element'

export const IconFeatherInbox: ElementComponent<IconFeatherInboxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInboxElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-inbox', IconFeatherInboxElement)

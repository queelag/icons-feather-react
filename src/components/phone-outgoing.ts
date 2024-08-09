import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneOutgoingElement } from '@aracna/icons-feather-web/elements/phone-outgoing-element'

export const IconFeatherPhoneOutgoing: ElementComponent<IconFeatherPhoneOutgoingElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneOutgoingElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-outgoing', IconFeatherPhoneOutgoingElement)

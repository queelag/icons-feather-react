import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneOutgoingElement } from '@aracna/icons-feather-web/elements/phone-outgoing-element'

export const IconFeatherPhoneOutgoing: ElementComponent<IconFeatherPhoneOutgoingElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneOutgoingElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-outgoing', IconFeatherPhoneOutgoingElement)

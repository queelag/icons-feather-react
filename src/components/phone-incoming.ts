import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneIncomingElement } from '@aracna/icons-feather-web/elements/phone-incoming-element'

export const IconFeatherPhoneIncoming: ElementComponent<IconFeatherPhoneIncomingElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneIncomingElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-incoming', IconFeatherPhoneIncomingElement)

import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneIncomingElement } from '@aracna/icons-feather-web/elements/phone-incoming-element'

export const IconFeatherPhoneIncoming: ElementComponent<IconFeatherPhoneIncomingElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneIncomingElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-incoming', IconFeatherPhoneIncomingElement)

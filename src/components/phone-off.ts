import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneOffElement } from '@aracna/icons-feather-web/elements/phone-off-element'

export const IconFeatherPhoneOff: ElementComponent<IconFeatherPhoneOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-off', IconFeatherPhoneOffElement)

import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneElement } from '@aracna/icons-feather-web/elements/phone-element'

export const IconFeatherPhone: ElementComponent<IconFeatherPhoneElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone', IconFeatherPhoneElement)

import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneElement } from '@aracna/icons-feather-web/elements/phone-element'

export const IconFeatherPhone: ElementComponent<IconFeatherPhoneElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone', IconFeatherPhoneElement)

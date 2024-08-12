import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneMissedElement } from '@aracna/icons-feather-web/elements/phone-missed-element'

export const IconFeatherPhoneMissed: ElementComponent<IconFeatherPhoneMissedElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneMissedElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-missed', IconFeatherPhoneMissedElement)

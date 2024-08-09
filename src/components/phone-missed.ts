import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneMissedElement } from '@aracna/icons-feather-web/elements/phone-missed-element'

export const IconFeatherPhoneMissed: ElementComponent<IconFeatherPhoneMissedElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneMissedElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-missed', IconFeatherPhoneMissedElement)

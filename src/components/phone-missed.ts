import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneMissedElement } from '@aracna/icons-feather-web/elements/phone-missed-element'

export const IconFeatherPhoneMissed: ElementComponent<IconFeatherPhoneMissedElement, IconProps> = createBaseElementComponent<
  IconFeatherPhoneMissedElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-missed', IconFeatherPhoneMissedElement)

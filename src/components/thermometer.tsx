import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherThermometerElement } from '@aracna/icons-feather-web/elements/thermometer-element.js'

export const IconFeatherThermometer: ElementComponent<IconFeatherThermometerElement, IconProps> = createBaseElementComponent<
  IconFeatherThermometerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-thermometer', IconFeatherThermometerElement)

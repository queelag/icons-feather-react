import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherThermometerElement } from '@aracna/icons-feather-web/elements/thermometer-element'

export const IconFeatherThermometer: ElementComponent<IconFeatherThermometerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherThermometerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-thermometer', IconFeatherThermometerElement)

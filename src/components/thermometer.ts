import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherThermometerElement } from '@aracna/icons-feather-web/elements/thermometer-element'

export const IconFeatherThermometer: ElementComponent<IconFeatherThermometerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherThermometerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-thermometer', IconFeatherThermometerElement)

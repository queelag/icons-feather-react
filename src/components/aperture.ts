import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherApertureElement } from '@aracna/icons-feather-web/elements/aperture-element'

export const IconFeatherAperture: ElementComponent<IconFeatherApertureElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherApertureElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-aperture', IconFeatherApertureElement)

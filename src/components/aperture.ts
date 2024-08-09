import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherApertureElement } from '@aracna/icons-feather-web/elements/aperture-element'

export const IconFeatherAperture: ElementComponent<IconFeatherApertureElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherApertureElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-aperture', IconFeatherApertureElement)

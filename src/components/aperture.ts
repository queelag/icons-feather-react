import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherApertureElement } from '@aracna/icons-feather-web/elements/aperture-element'

export const IconFeatherAperture: ElementComponent<IconFeatherApertureElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherApertureElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-aperture', IconFeatherApertureElement)

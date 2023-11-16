import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGlobeElement } from '@aracna/icons-feather-web/elements/globe-element'

export const IconFeatherGlobe: ElementComponent<IconFeatherGlobeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGlobeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-globe', IconFeatherGlobeElement)

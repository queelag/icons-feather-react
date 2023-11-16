import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLoaderElement } from '@aracna/icons-feather-web/elements/loader-element'

export const IconFeatherLoader: ElementComponent<IconFeatherLoaderElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLoaderElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-loader', IconFeatherLoaderElement)

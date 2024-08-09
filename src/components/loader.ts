import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLoaderElement } from '@aracna/icons-feather-web/elements/loader-element'

export const IconFeatherLoader: ElementComponent<IconFeatherLoaderElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLoaderElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-loader', IconFeatherLoaderElement)

import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCodepenElement } from '@aracna/icons-feather-web/elements/codepen-element'

export const IconFeatherCodepen: ElementComponent<IconFeatherCodepenElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCodepenElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-codepen', IconFeatherCodepenElement)

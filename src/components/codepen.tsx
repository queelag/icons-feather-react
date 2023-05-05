import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCodepenElement } from '@aracna/icons-feather-web/elements/codepen-element.js'

export const IconFeatherCodepen: ElementComponent<IconFeatherCodepenElement, IconProps> = createBaseElementComponent<
  IconFeatherCodepenElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-codepen', IconFeatherCodepenElement)
